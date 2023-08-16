import { Navbar, Button, Input } from "@material-tailwind/react";

export default function AdminNavbar() {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-gray-900">
        <div className="relative flex w-full gap-2">
          <Input
            type="search"
            label="Busca un usuario..."
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="">
            Buscar
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
