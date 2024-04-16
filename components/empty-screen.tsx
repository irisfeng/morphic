import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '英伟达增长势头为何如此迅猛？',
    message: '英伟达增长势头为何如此迅猛？'
  },
  {
    heading: '秦朗丢寒假作业是摆拍吗？',
    message: '秦朗丢寒假作业是摆拍吗？'
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
