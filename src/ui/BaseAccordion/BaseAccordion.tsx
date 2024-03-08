import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/ui/accordion";

interface AccordionItemInterface {
  title: string;
  content: string;
}

export function BaseAccordion({
  items = [],
}: {
  items: AccordionItemInterface[];
}) {
  return (
    <Accordion type="single" collapsible={true} className="w-full">
      {items &&
        items.map((item: AccordionItemInterface, index: number) => (
          <AccordionItem value={`acccordion-item-${index}`} key={index}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
