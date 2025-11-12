import { Card } from "@/components/ui/card";

export interface IExtendedLoginForm extends React.ComponentPropsWithRef<"div"> {
  action: string | ((formData: FormData) => void | Promise<void>) | undefined;
}

export interface IExtendedSiginInForm
  extends React.ComponentProps<typeof Card> {
  action: string | ((formData: FormData) => void | Promise<void>) | undefined;
}
