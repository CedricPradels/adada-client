import React, {
  useState,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

type EmailType = {
  type: 'email';
  initialValue?: string;
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type NumberType = {
  type: 'number';
  initialValue?: number;
} & Pick<InputProps, 'min' | 'max' | 'step'>;

type PasswordType = {
  type: 'password';
  initialValue?: string;
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type SearchType = {
  type: 'search';
  initialValue?: string;
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type TelType = {
  type: 'tel';
  initialValue?: string;
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type TextType = {
  type: 'text';
  initialValue?: string;
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type URLType = {
  type: 'url';
  initialValue?: string;
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

export type TextInputProps = {
  label?: string;
  onChange?: (value: string | number) => void;
} & Pick<InputProps, 'placeholder'> &
  (
    | EmailType
    | NumberType
    | PasswordType
    | SearchType
    | TelType
    | TextType
    | URLType
  );

const Container = styled.div``;

const Input = styled.input``;

const Label = styled.label``;

export const testIds = {
  container: 'containter',
  input: 'input',
  label: 'label',
};

export const TextInput = (props: TextInputProps) => {
  const { label, initialValue, ...inputProps } = props;

  const [inputValue, setInputValue] = useState<string | number>(
    initialValue || ''
  );

  const handleChange: InputProps['onChange'] = (e) => {
    setInputValue(e.target.value);

    if (!props.onChange) return;
    if (props.type === 'number') {
      return props.onChange(e.target.valueAsNumber);
    }
    return props.onChange(e.target.value);
  };

  const id: LabelProps['htmlFor'] & InputProps['id'] = uniqid();

  return (
    <Container data-testid={testIds.container}>
      {props.label && (
        <Label htmlFor={id} data-testid={testIds.label}>
          {props.label}
        </Label>
      )}
      <Input
        data-testid={testIds.input}
        id={id}
        {...inputProps}
        value={inputValue}
        onChange={handleChange}
      />
    </Container>
  );
};
