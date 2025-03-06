import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { InfoIcon, MessageSquareIcon } from "lucide-react";

interface ResultsDisplayProps {
  result: any | null;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  if (!result) {
    return (
      <div className="h-full flex items-center justify-center p-8 border border-dashed rounded-lg bg-muted/30">
        <div className="text-center text-muted-foreground">
          <MessageSquareIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <p className="text-sm sm:text-base">متن خود را وارد کنید و دکمه تحلیل را بزنید تا نتایج اینجا نمایش داده شود</p>
        </div>
      </div>
    );
  }

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '😊';
      case 'negative': return '😔';
      case 'neutral': return '😐';
      default: return '❓';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'border-green-200 dark:border-green-800';
      case 'negative': return 'border-destructive/50 dark:border-destructive/30';
      case 'neutral': return 'border-blue-200 dark:border-blue-800';
      default: return '';
    }
  };

  return (
    <Card className={`border relative overflow-hidden h-full ${getSentimentColor(result.sentiment)}`}>
      <BorderBeam 
        duration={6} 
        size={100} 
        colorFrom={result.sentiment === 'positive' ? "#22c55e" : result.sentiment === 'negative' ? "#ef4444" : "#3b82f6"} 
        colorTo="#9c40ff" 
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          نتیجه تحلیل
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          تحلیل احساسات متن شما با دقت {Math.round(result.confidence * 100)}٪
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="bg-card/50 backdrop-blur-sm">
          <AlertTitle className="flex items-center gap-2 text-base sm:text-lg">
            <span className="text-xl sm:text-2xl">{getSentimentEmoji(result.sentiment)}</span>
            احساس کلی: 
            <Badge className={`
              ${result.sentiment === 'positive' ? 'bg-success/20 text-success hover:bg-success/30' : 
                result.sentiment === 'negative' ? 'bg-destructive/20 text-destructive hover:bg-destructive/30' : 
                'bg-primary/20 text-primary hover:bg-primary/30'}
            `}>
              {result.sentiment === 'positive' && 'مثبت'}
              {result.sentiment === 'negative' && 'منفی'}
              {result.sentiment === 'neutral' && 'خنثی'}
            </Badge>
          </AlertTitle>
          <AlertDescription className="mt-2 text-xs sm:text-sm">
            {result.explanation}
          </AlertDescription>
        </Alert>
        
        <div className="grid gap-2">
          <div className="font-semibold flex items-center gap-1 text-xs sm:text-sm">
            <InfoIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            میزان اطمینان:
          </div>
          <div className="w-full bg-muted rounded-full h-3 sm:h-4 overflow-hidden">
            <div 
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.round(result.confidence * 100)}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-right">{Math.round(result.confidence * 100)}%</p>
        </div>

        {result.keyPhrases?.length > 0 && (
          <div className="grid gap-2">
            <div className="font-semibold flex items-center gap-1 text-xs sm:text-sm">
              <MessageSquareIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              عبارات کلیدی:
            </div>
            <div className="flex flex-wrap gap-2">
              {result.keyPhrases.map((phrase: string, i: number) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs"
                >
                  {phrase}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 