import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthButton() {
   "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4">
      {/* Hey, {user.email}! */}
      <form action={signOut}>
        <button className="dark:bg-gray-500 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 22H4v-2a5 5 0 015-5h6a5 5 0 015 5v2zm-8-9a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="dark:bg-gray-500 py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 22h-2v-2a3 3 0 00-3-3H9a3 3 0 00-3 3v2H4v-2a5 5 0 015-5h6a5 5 0 015 5v2zm-8-9a6 6 0 110-12 6 6 0 010 12zm0-2a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    </Link>
  );
}
