import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ZapIcon } from "lucide-react";
import { SampleTexts } from "./SampleTexts";

// Maximum character limit for the API
const MAX_CHARS = 2000;

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  loading: boolean;
  selectedSample: number | null;
  setSelectedSample: (index: number | null) => void;
  onAnalyze: () => void;
}

export function TextInput({ 
  text, 
  setText, 
  loading, 
  selectedSample, 
  setSelectedSample, 
  onAnalyze 
}: TextInputProps) {
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Limit text to MAX_CHARS characters
    const newText = e.target.value.slice(0, MAX_CHARS);
    setText(newText);
  };

  const handleSampleSelect = (sampleText: string, index: number) => {
    // Ensure sample text also respects character limit
    setText(sampleText.slice(0, MAX_CHARS));
    setSelectedSample(index);
  };

  const charsRemaining = MAX_CHARS - text.length;
  const isAtLimit = charsRemaining <= 0;

  return (
    <Card className="border border-border relative overflow-hidden h-full">
      <BorderBeam duration={8} size={100} colorFrom="#9c40ff" colorTo="#ffaa40" />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <ZapIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          متن مورد نظر
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          متن خود را در کادر زیر وارد کنید یا از نمونه‌های آماده استفاده کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Textarea
            placeholder="متن خود را اینجا وارد کنید..."
            value={text}
            onChange={handleTextChange}
            className="min-h-[150px] text-sm sm:text-base focus-visible:ring-primary"
            maxLength={MAX_CHARS}
          />
          <div className="text-xs text-right">
            <span className={isAtLimit ? "text-destructive font-medium" : "text-muted-foreground"}>
              {charsRemaining} / {MAX_CHARS} کاراکتر باقیمانده
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <SampleTexts 
          selectedSample={selectedSample} 
          onSelectSample={handleSampleSelect} 
        />
        <Button 
          onClick={onAnalyze} 
          disabled={loading || !text.trim()}
          className="w-full"
          size="lg"
        >
          {loading ? "در حال تحلیل..." : "تحلیل احساسات متن"}
        </Button>
      </CardFooter>
    </Card>
  );
} 