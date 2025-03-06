import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export function Header() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold" dir="auto">
        تحلیل احساسات متن ✨ 
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground">
        متن خود را وارد کنید تا با هوش مصنوعی احساسات آن را تحلیل شود
      </p>
      
      <Alert variant="default" className="bg-muted/50 max-w-full mx-auto text-xs sm:text-sm">
        <InfoIcon className="h-3 w-3 sm:h-4 sm:w-4" />
        <AlertDescription>
          این سرویس از هوش مصنوعی مولد برای تحلیل و ارائه خروجی ساختاریافته استفاده می‌کند.
        </AlertDescription>
      </Alert>
    </div>
  );
} 