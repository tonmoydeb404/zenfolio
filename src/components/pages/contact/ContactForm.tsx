"use client";
import contactSchema, { ContactSchema } from "@/schema/contactSchema";
import { useForm } from "react-hook-form";

import StatusCard from "@/components/cards/StatusCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import appIcons from "@/config/icons/app-icons";
import formSubmit from "@/utils/formSubmit";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  className?: string;
};

const ContactForm = ({ className = "" }: Props) => {
  const formProps = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactSchema) => {
    try {
      await formSubmit(values);
      formProps.reset();
    } catch (error) {
      formProps.setError("root", { message: "Sorry, Cannot send message!" });
    }
  };

  return (
    <div className={className}>
      <Form {...formProps}>
        <form
          className={`grid sm:grid-cols-2 gap-3`}
          onSubmit={formProps.handleSubmit(onSubmit)}
        >
          <FormField
            control={formProps.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="text-base sm:py-6 sm:px-4 bg-accent dark:bg-accent border border-slate-300 dark:border-slate-600"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formProps.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="text-base sm:py-6 sm:px-4 bg-accent dark:bg-accent border border-slate-300 dark:border-slate-600"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formProps.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="text-base min-h-[200px] sm:px-4 bg-accent dark:bg-accent border border-slate-300 dark:border-slate-600"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-3">
            <Button
              size={"lg"}
              className="gap-1"
              type="submit"
              disabled={formProps.formState.isSubmitting}
            >
              {formProps.formState.isSubmitting ? (
                <>
                  SENDING <appIcons.LOADER className="animate-spin" />
                </>
              ) : (
                <>
                  SEND MESSAGE <appIcons.SEND />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>

      {formProps.formState.isSubmitted &&
      formProps.formState.isSubmitSuccessful &&
      !formProps.formState.isSubmitting ? (
        <StatusCard
          text="Message sent successfully!"
          status="SUCCESS"
          className="mt-5"
        />
      ) : null}

      {formProps.formState.errors.root?.message ? (
        <StatusCard
          text={formProps.formState.errors.root.message}
          status="ERROR"
          className="mt-5"
        />
      ) : null}
    </div>
  );
};

export default ContactForm;
