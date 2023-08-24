import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByName } from "../../../toolkit/Users/usersHandler";
import { clearError } from "../../../toolkit/Users/usersSlice";
import { Navbar, Button, Input } from "@material-tailwind/react";
import { toast } from "sonner";
import { useEffect } from "react";

export default function NavBarPayment() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getUsersByName(name));
    setName("");
  };

  useEffect(() => {
    if (error) {
      toast.message("Error", {
        description: "No se encontraron resultados",
      });
      dispatch(clearError());
    }
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch(e);
  };

  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-3 mt-2 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-gray-900">
          <div className="relative flex w-full gap-2">
            <Input
              type="search"
              name="search"
              value={name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              label="Busca un pago..."
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button size="sm" onClick={handleSearch} ripple={true}>
              Buscar
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
