import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '勒沃库森为什么叫药厂？',
    message: '勒沃库森为什么叫药厂？'
  },
  {
    heading: '魔兽世界国服回归？',
    message: '魔兽世界国服回归？'
  },
  {
    heading: '电动汽车Top10',
    message: '电动汽车Top10'
  },
  {
    heading: 'ollama是什么？',
    message: 'ollama是什么？'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
