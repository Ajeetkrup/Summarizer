import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function HomeSection() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="home">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-500">
                Summarizer: Simplify Your Reading
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our AI-powered summarizer helps you understand complex documents
                in minutes.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-500 hover:bg-gray-300 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/summarizer"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-amber-100 py-12 md:py-24 lg:py-32  dark:bg-gray-800"
        id="features"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Features
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the powerful features of our summarizer.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  Our summarizer uses advanced AI algorithms to understand and
                  summarize complex texts.
                </CardContent>
              </Card>
              <Card className="animate-pulse">
                <CardHeader>
                  <CardTitle>Customizable Summaries</CardTitle>
                </CardHeader>
                <CardContent>
                  Adjust the length of the summary to fit your needs.
                  <p className="text-sky-700 animate-pulse">Coming soon...</p>
                </CardContent>
              </Card>
              <Card className="animate-pulse">
                <CardHeader>
                  <CardTitle>Supports Multiple Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  Summarize texts from PDFs, Word documents, web pages, and
                  more.
                  <p className="text-sky-700 animate-pulse">Coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-500">
                About Us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are a team of AI enthusiasts committed to making information
                more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
