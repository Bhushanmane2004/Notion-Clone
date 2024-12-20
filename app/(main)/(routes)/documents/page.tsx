"use client"
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";



function Documents() {
  const {user} = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
      className="block dark:hidden"
      src="/empty.png"
      alt="Empty"
      height="300"
      width="300"/>
      <Image
      className="hidden dark:block"
      src="/empty-dark.png"
      alt="Empty"
      height="300"
      width="300"/>
      <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s Jotion</h2>
      <Button >
        <PlusCircle className="h-4 w-4 mr-2"/>
        Create a Note
      </Button>
    </div>
  )
}

export default Documents;
