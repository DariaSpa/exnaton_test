import { Link } from "@nextui-org/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-xl mt-12">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}