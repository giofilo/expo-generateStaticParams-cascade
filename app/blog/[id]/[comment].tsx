export async function generateStaticParams(params: {
  id: "one" | "two";
}): Promise<Record<string, string>[]> {
  console.log(params);
  // const comments = await getComments(params.id);
  const comments = [{ id: "1" }, { id: "2" }];
  return comments.map((comment) => ({
    ...params,
    comment: comment.id,
  }));
}
