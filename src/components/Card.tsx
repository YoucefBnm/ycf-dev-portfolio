import { PropsWithChildren, createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface Content {
  id: string;
  title: string;
  description: string;
}
type CardContext = {
  content: Content;
};

type CardProps = PropsWithChildren & {
  content: Content;
  className?: string;
};

function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCardContext must be used within a Card");
  }

  return context;
}

const CardContext = createContext<CardContext | undefined>(undefined);

const Card = ({ content, className, children }: CardProps) => {
  return (
    <CardContext.Provider value={{ content }}>
      <div className={`px-6 py-8 flex flex-col gap-8 h-full ${className}`}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

const CardHeader = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  const { content } = useCardContext();

  return (
    <div className="flex items-center justify-between ">
      <h3 className={cn(className)}>{content.title}</h3>
      {/* icon || step  */}
      {children}
    </div>
  );
};

const CardBody = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  const { content } = useCardContext();

  return (
    <div className={cn("flex flex-col items-start gap-4", className)}>
      <p className=" text-neutral-300">{content.description}</p>
      {children}
    </div>
  );
};

const CardFooter = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div className={cn("mt-auto flex flex-wrap gap-2", className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
