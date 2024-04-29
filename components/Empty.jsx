import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const Empty = () => {
  return (
    <div>
      <Alert>
  {/* <Terminal className="h-4 w-4" /> */}
  <AlertTitle>Sorry!</AlertTitle>
  <AlertDescription>
    Input cannot be empty
  </AlertDescription>
</Alert>
    </div>
  )
}

export default Empty
