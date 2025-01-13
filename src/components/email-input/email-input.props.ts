export interface EmailInputProps {
  value?: string;
  onChange?: (email: string, error: boolean) => void;
  label: string;
}
