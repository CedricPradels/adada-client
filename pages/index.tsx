import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextInput, TextInputProps } from '../components';
import { APIRacesResponse, getRaces } from '../fetchs';
import { RaceType } from '../types';
import { DateTime } from 'luxon';

type FormState = {
  type: RaceType[];
} & Record<'purseMin' | 'purseMax', number> &
  Record<'runnersMin' | 'runnersMax', number>;

const Container = styled.div``;

const SearchForm = styled.div``;

const Results = styled.div``;

export default function Home() {
  const [form, setForm] = useState<FormState>({
    purseMax: 0,
    purseMin: 0,
    runnersMax: 0,
    runnersMin: 0,
    type: [],
  });

  const [races, setRaces] = useState<APIRacesResponse>([]);

  type HandleChange = (key: keyof FormState) => TextInputProps['onChange'];
  const handleChange: HandleChange = (key) => (value) =>
    typeof value === 'number' && setForm({ ...form, [key]: value });

  const handleSearch = async () => {
    const races = await getRaces({
      date: DateTime.fromObject({ zone: 'Europe/Paris' }).toISODate(),
      ...form,
    });
    setRaces(races);
  };

  return (
    <Container data-testid="test">
      <SearchForm>
        <TextInput
          type="number"
          min="0"
          label="Partants minimum"
          initialValue={form.runnersMin}
          onChange={handleChange('runnersMin')}
        />
        <TextInput
          type="number"
          min="0"
          label="Partants maximum"
          initialValue={form.runnersMax}
          onChange={handleChange('runnersMax')}
        />
        <TextInput
          type="number"
          min="0"
          label="Allocation minimum"
          initialValue={form.purseMin}
          onChange={handleChange('purseMin')}
        />
        <TextInput
          type="number"
          min="0"
          label="Allocation maximum"
          initialValue={form.purseMin}
          onChange={handleChange('purseMax')}
        />

        <Button tag="button" onClick={handleSearch}>
          Rechercher
        </Button>
      </SearchForm>

      <Results>
        {races.map((race) => (
          <div key={race._id}>{JSON.stringify(race)}</div>
        ))}
      </Results>
    </Container>
  );
}
