export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  return [{ id: "one" }, { id: "two" }];
}
