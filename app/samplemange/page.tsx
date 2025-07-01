"use client"

import { Button } from '@/components/ui-components/button'
import { CardContent } from '@/components/ui-components/card'
import { Card } from '@/components/ui/card'
import React from 'react'

const samplemange = () => {
  return (
    <>
      <Card className="w-full">
        <CardContent className="flex mt-20 w-80 flex-col items-center justify-center h-full">
          <h2 className="text-xl font-bold mb-4">Sample Management</h2>
          <p className="text-gray-600">This is a sample management page.</p>
          <div className="flex flex-row gap-4 mt-6">
            <Button className='bg-blue-500'
              variant="destructive">

              Save

            </Button>
            <Button className='bg-green-700'
              variant="destructive">

              Register

            </Button>
          </div>
        </CardContent>
      </Card>
    
    </>
  )
}

export default samplemange