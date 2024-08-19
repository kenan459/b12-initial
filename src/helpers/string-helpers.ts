export const truncate = (text: string, length: number) => {
  return text?.substring(0, length) + (text?.length > length ? '...' : '')
}

export const formatDate = (date: string) => {
  const dateObject = new Date(date)
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObject)
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(dateObject)
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObject)

  return `${day} ${month}, ${year}`
}

export const diffDates = (date1: Date | string, date2: Date | string) => {
  const date1String = new Date(date1)
  const date2String = new Date(date2)

  return date2String.getTime() - date1String.getTime()
}
