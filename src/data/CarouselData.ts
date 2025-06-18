type CarouselItem = {
  title: string,
  items: string[],
};
export const CarouselData: CarouselItem[] = [
  {
    title: "$ init multimodal_support",
    items: [
      "❌ Websites: JS & rate limits are messy",
      "❌ PDFs: OCR fails, extraction inconsistent",
      "❌ Authentication tokens expire constantly"
    ],
  },
  {
    title: "$ init vector_database",
    items: [
      "❌ Way too expensive. Time to switch",
      "❌ Painfully slow. Let's try another",
      "❌ Won't scale. Back to square one",
      "❌ Maintenance nightmare. Need alternatives"
    ],
  },
  {
    title: "$ choose embedding_model",
    items: [
      "⚠️ Which model fits your use case?",
      "⚠️ Confusing performance tradeoffs",
      "⚠️ Can't keep up with new releases"
    ],
  },
  {
    title: "$ handle format_parsing",
    items: [
      "❌ Markdown: Tables break everything",
      "❌ HTML: Scripts and styles interfere",
      "❌ PDF: Layout ruins extraction"
    ],
  },
  {
    title: "$ setup connection_sync",
    items: [
      "❌ Sync failures between data sources",
      "❌ API rate limits during large syncs",
      "❌ Images: Need vision models now?",
      "❌ Audio/Video: Transcription costs soar"
    ],

  },
];
