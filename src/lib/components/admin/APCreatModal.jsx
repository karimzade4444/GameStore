import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { useState } from "react";
import { createGames } from "../../api/games";
import { useStore } from "../../store/store";


const APCreatModal = () => {
    const [createModal, setCreateModal] = useState(false);
    const queryClient = useQueryClient();

     const { mutate, isPending } = useMutation({
       mutationFn: createGames,
       onSuccess: () => {
         void queryClient.invalidateQueries({ queryKey: ["games"] });
         setCreateModal(false);
       },
     });

     const name = useStore((state)=>state.name);
     const img = useStore((state) => state.img);

     const price = useStore((state) => state.price);
     const logo = useStore((state) => state.logo);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);
     const name = useStore((state) => state.name);



  return (
    <>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={createModal}
        onCancel={() => setCreateModal(false)}
        onOk={() => {
          mutate({
            name,
            title,
            category,
          });
        }}
        confirmLoading={isPending}
      >
      
      </Modal>
    </>
  );
}

export default APCreatModal