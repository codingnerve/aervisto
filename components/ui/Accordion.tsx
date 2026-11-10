import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Items sharing the same `name` behave as an exclusive group (one open at a time). */
  name: string;
  className?: string;
}

/** Zero-JS accordion built on native <details>/<summary>, safe to render in server components. */
export function Accordion({ items, name, className = "" }: AccordionProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <details
          key={item.question}
          name={name}
          className="group rounded-xl border border-border-subtle bg-white open:border-aviation-blue/30 open:shadow-sm"
        >
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-sm font-bold text-navy marker:content-none hover:text-aviation-blue [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-muted-text transition-transform group-open:rotate-180 group-open:text-aviation-blue"
              aria-hidden="true"
            />
          </summary>
          <p className="border-t border-border-subtle px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-text">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
