import { AlertTriangle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/ui/ui/alert";

interface BaseAlertProps {
  variant?: string;
}

export function BaseAlert({ variant }: BaseAlertProps) {
  return (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
}
