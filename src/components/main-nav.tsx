import { getCategories } from "@/actions/data";
import Link from "next/link";

interface MainNavProps {
  name: string;
  id: number;
}

export async function MainNav() {
  const { data: categories } = await getCategories();

  const category: MainNavProps[] = categories.categories;

  return (
    <nav className="border-b bg-white">
      <div className="container overflow-auto">
        <div className="flex h-12 items-center space-x-6">
          {category?.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.name}`}
              className="whitespace-nowrap text-sm hover:text-blue-600"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
