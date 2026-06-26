import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { useState } from "react";
import { createGames } from "../../api/games";
import { useStore } from "../../store/store";


const APCreatModal = ({createModal, setCreateModal}) => {
    
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
     const trailer = useStore((state) => state.trailer);
     const imgbg = useStore((state) => state.imgbg);
     const developer = useStore((state) => state.developer);
     const release = useStore((state) => state.release);
     const tags = useStore((state) => state.tags);
     const storage = useStore((state) => state.storage);
     const language = useStore((state) => state.language);
     const platform = useStore((state) => state.platform);
     const title = useStore((state) => state.title);



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
            img,
            price,
            logo,
            trailer,
            imgbg,
            developer,
            release,
            tags,
            storage,
            language,
            platform,
            title
          });
        }}
        confirmLoading={isPending}
      >
      
      </Modal>
    </>
  );
}

export default APCreatModal