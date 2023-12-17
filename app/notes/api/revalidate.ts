export default async function revalidate(req: any, res: any) {
  try {
    await res.unstable_revalidate("/notes");
    res.json({ revalidated: true });
  } catch (error) {
    console.error("Error during revalidation:", error);
    res.status(500).json({ error: "Revalidation failed" });
  }
}
