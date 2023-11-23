interface EditClientProps {
  params: {
    id: string
  }
}

export default function Edit({params}: EditClientProps) {
  console.log(params.id)
  return(
    <p>Hello Word</p>
  )
}