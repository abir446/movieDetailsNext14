import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const NotFound = () => {
  return (
    <div>
      <Alert>
  {/* <Terminal className="h-4 w-4" /> */}
  <AlertTitle>Sorry!</AlertTitle>
  <AlertDescription>
    The searched movie is not found.
  </AlertDescription>
</Alert>
    </div>
  )
}

export default NotFound
