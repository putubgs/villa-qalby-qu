import { Coffee } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6" />
            <span className="text-xl font-bold">Villa Qalby Qu</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
            &copy; 2024 Villa Qalby Qu. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

