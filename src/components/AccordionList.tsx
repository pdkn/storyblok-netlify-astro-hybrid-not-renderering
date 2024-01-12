import { type FC, useState} from "react";
import type { ListStoryblok, TextSectionStoryblok } from '../component-types-sb';
import { RichTextRenderer } from "./RichTextRenderer";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion";
  
  export type AccordionListProps = {
    items: ListStoryblok["items"];
  };

  export type AccordionListItemProps = {
    item: TextSectionStoryblok;
    listLength: number;
    index: number;
  };

const AccordionListItem:FC<AccordionListItemProps> = ({item, listLength, index}) => { 
  return (
      <AccordionItem
        key={"accordion-item-" + item.id}
        value={`item-${index + 1}`}
        border={index !== listLength - 1}
      >
        <AccordionTrigger>
        <span className="flex flex-row items-center gap-2 text-base md:text-2xl">
          <span className="group-hover:underline">{item.headline}</span>
        </span>
        </AccordionTrigger>
        <AccordionContent>
          <span className="flex justify-start">
            <div
              className="md:pl-8 text-base/[22px] text-grey md:max-w-[640px]  md:text-xl/7"
            >
              {item && item.text && <RichTextRenderer richtext={item.text} />}</div>
          </span>
        </AccordionContent>
      </AccordionItem>
  )};
  

  export const AccordionList:FC<AccordionListProps> = ({items = [] }) => {
    //console.log("AccordionList items", items)

    if ( items && items.length ) {
      // Assuming you have three items in the accordion
      const [openItems, setOpenItems] = useState(items.map((item, idx)=> `item-${idx + 1}`));

      const handleValueChange = (value:string[]) => {
        setOpenItems(value);
      };

      return (
        <Accordion type="multiple" value={openItems} onValueChange={handleValueChange} className="w-full">
          {items?.map((item:TextSectionStoryblok, idx:number) => { return (
					<AccordionListItem item={item} listLength={items.length} index={idx} />
			    )})} 
        </Accordion>
      )
    } else {
      return (<p>NO ACCORDION ITEMS</p>)
    }
  };
  