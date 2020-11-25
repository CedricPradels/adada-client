import React, {
  useState,
  useEffect,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;
type InputValue = string extends InputProps['value'] ? string : never;

type EmailType = {
  type: 'email';
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type NumberType = {
  type: 'number';
} & Pick<InputProps, 'min' | 'max' | 'step'>;

type PasswordType = {
  type: 'password';
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type SearchType = {
  type: 'search';
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type TelType = {
  type: 'tel';
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type TextType = {
  type: 'text';
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

type URLType = {
  type: 'url';
} & Pick<InputProps, 'maxLength' | 'minLength' | 'pattern' | 'size'>;

export type TextInputProps = {
  initialValue?: InputValue;
  label?: string;
  onChange?: (value: InputValue) => void;
} & Pick<InputProps, 'value' | 'placeholder'> &
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

const id: LabelProps['htmlFor'] & InputProps['id'] = uniqid();

export const TextInput = (props: TextInputProps) => {
  const { label, type, initialValue, onChange, ...inputProps } = props;

  const [inputValue, setInputValue] = useState<InputValue>(initialValue || '');

  const handleChange: InputProps['onChange'] = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (onChange) onChange(inputValue);
  }, [inputValue]);

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
