import { useEffect } from "react";
import { toast } from "react-hot-toast";

const useReport = (id) => {
  console.log("update id is", id);
  useEffect(() => {
    if (id) {
      const url = `http://localhost:5000/addproduct/report/${id}`;

      fetch(url, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Report Successfully");
        });
    }
  }, [id]);
};

export default useReport;
