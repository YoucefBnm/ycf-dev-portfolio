import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { questionnaireContent } from "@/constants/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import RouteTransition from "@/hoc/RouteTransition";
import { HeroContainer, HeroContent } from "@/components/HeroContainer";
import ContainerVelocity from "@/components/ContainerVelocity";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email().min(8),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  projectTitle: z.string().optional(),
  websiteUrl: z.string().url().optional(),
  projectType: z.enum(["ecommerce", "portfolio", "personal", "business"]),
  branding: z.enum(["yes", "no"]),
  socialLinks: z.string().optional(),
  projectDescription: z.string(),
});

const Questionnaire = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      phone: "",
      projectTitle: "",
      projectType: undefined,
      branding: undefined,
      socialLinks: "",
      projectDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          to_name: "Youcef Bnm",
          to_email: "ssefbnm@gmail.com",
          message: `
              - Company Name: ${values.companyName},
              - Phone: ${values.phone},
              - Project Title: ${values.projectTitle},
              - Website Url: ${values.websiteUrl},
              - Website Type: ${values.projectType},
              - has Branding: ${values.branding},
              - Social Links: ${values.socialLinks},
              - Project Description: ${values.projectDescription}
            `,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Thank you, I will reply soon",
            description: "Your message has been sent.",
            className: "border border-primary-1  bg-primary-900 bg-opacity-70",
          });
        },
        (error) => {
          setLoading(false);
          toast({
            title: "Something went wrong !!",
            description: `there was problem with your message.`,
          });
          console.log(error);
        }
      );
  }

  const navigate = useNavigate();
  const navigateToBooking = () => navigate("/booking");
  return (
    <main className="">
      <HeroContainer className="min-h-[70svh] place-content-center">
        <HeroContent className="flex flex-col gap-4 mb-4">
          <div className="relative mix-blend-difference place-content-end overflow-hidden col-span-12">
            <ContainerVelocity baseVelocity={3}>
              <h1 className="md:text-9xl uppercase">
                {questionnaireContent.title} &nbsp;
              </h1>
            </ContainerVelocity>
          </div>

          <div className="px-default col-span-12 flex justify-between gap-4 items-end">
            <Button
              onClick={navigateToBooking}
              variant={"secondary"}
              className="rounded-full"
              size={"lg"}
            >
              OR BOOK A CALL
            </Button>
            <p className="basis-1/2 md:basis-1/4 text-xs md:text-sm text-neutral-300">
              {questionnaireContent.description}
            </p>
          </div>
        </HeroContent>
      </HeroContainer>

      <section className="py-12 px-default bg-zinc-50 text-black">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <h3>Basic Info</h3>
              <div className="md:flex gap-6 flex-wrap space-y-4 md:space-y-0">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="your Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="your Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator className="my-4 bg-zinc-200" />
            <div className="space-y-4">
              <h3>Project Details</h3>
              <div className="md:flex gap-6 flex-wrap space-y-4 md:space-y-0">
                <FormField
                  control={form.control}
                  name="projectTitle"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Project Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Existing Website</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="provide website URL (leave blank if none)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Separator className="my-4 bg-zinc-200" />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Website Type</FormLabel>

                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-y-1"
                      >
                        {/* ecommerce portfolio personal business */}
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className="  rounded-md size-5"
                              value="ecommerce"
                            />
                          </FormControl>
                          <FormLabel>Ecommerce</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className="  rounded-md size-5"
                              value="portfolio"
                            />
                          </FormControl>
                          <FormLabel>Portfolio</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className="  rounded-md size-5"
                              value="personal"
                            />
                          </FormControl>
                          <FormLabel>Personal</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className="  rounded-md size-5"
                              value="business"
                            />
                          </FormControl>
                          <FormLabel>Business</FormLabel>
                        </FormItem>
                      </RadioGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="branding"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>
                        Existing Branding (logo, colors, fonts)
                      </FormLabel>

                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className="  rounded-md size-5"
                              value="yes"
                            />
                          </FormControl>
                          <FormLabel>Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className="  rounded-md size-5"
                              value="no"
                            />
                          </FormControl>
                          <FormLabel>No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Separator className="my-4 bg-zinc-200" />
                <FormField
                  control={form.control}
                  name="socialLinks"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Social Links</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Include your social media links (facebook, linkedin, x, etc.)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem className="basis-[calc(50%-12px)]">
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="briefely describe the project and its main objectives"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              size={"lg"}
              className="rounded-full bg-primary-1 text-inherit hover:text-zinc-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "..." : "Submit"}
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
};

const AsyncQuestionnaire = RouteTransition(Questionnaire);
export default AsyncQuestionnaire;
