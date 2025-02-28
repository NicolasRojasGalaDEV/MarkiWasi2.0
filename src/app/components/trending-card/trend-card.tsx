interface TrendCardProps {
  category: string
  postName: string
  reactionsCount: string
}

export function TrendCard ({
  category,
  postName,
  reactionsCount
}: TrendCardProps) {
  return (
      <article className="flex items-center justify-between py-4 text-gray-800 rounded-lg w-90">
        <header className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">{category}</span>
            <strong className="text-sm">{postName}</strong>
            <span className="text-gray-500 text-xs">{reactionsCount}</span>
          </div>
        </header>
        <aside></aside>
      </article>
  )
}
