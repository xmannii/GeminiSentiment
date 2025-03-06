import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

// Sample texts data
const sampleTexts = [
  {
    text: "وای عالی بود! رستوران جدیدی که رفتیم غذاهاش فوق‌العاده بود. سرویس‌دهی و برخورد پرسنل هم که حرف نداشت. حتماً بازم میرم 👌",
    label: "نظر مثبت",
    icon: <ThumbsUpIcon className="h-4 w-4" />,
    comment: "یک نظر کاملاً مثبت و تشویق‌کننده"
  },
  {
    text: "اصلاً راضی نبودم. کیفیت افتضاح، قیمت‌ها سرسام‌آور و از همه بدتر برخورد پرسنل خیلی بد بود. پشیمونم از انتخابم 😤",
    label: "نظر منفی", 
    icon: <ThumbsDownIcon className="h-4 w-4" />,
    comment: "یک نظر کاملاً منفی و ناراضی"
  },
  {
    text: "خب، چیز خاصی نبود. یه خرید معمولی انجام دادم. نه خیلی خوب، نه خیلی بد. قیمت‌ها هم متوسط بود.",
    label: "نظر خنثی",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    comment: "یک نظر معمولی و بدون جهت‌گیری خاص"
  }
];

interface SampleTextsProps {
  selectedSample: number | null;
  onSelectSample: (text: string, index: number) => void;
}

export function SampleTexts({ selectedSample, onSelectSample }: SampleTextsProps) {
  return (
    <div className="w-full">
      <p className="text-xs sm:text-sm text-muted-foreground mb-2">نمونه‌های آماده:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        {sampleTexts.map((sample, i) => (
          <Card 
            key={i} 
            className={`cursor-pointer transition-all ${selectedSample === i ? 'ring-2 ring-primary' : ''}`}
            onClick={() => onSelectSample(sample.text, i)}
          >
            <CardHeader className="p-2 sm:p-3">
              <CardTitle className="text-xs sm:text-sm flex items-center gap-1">
                {sample.icon}
                {sample.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 sm:p-3 pt-0">
              <p className="text-xs text-muted-foreground line-clamp-2">{sample.text}</p>
            </CardContent>
            <CardFooter className="p-2 sm:p-3 pt-0">
              <p className="text-xs text-primary/80">{sample.comment}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 