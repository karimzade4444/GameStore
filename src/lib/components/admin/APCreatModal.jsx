import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DatePicker, Input, Modal, Select } from "antd";
import { useState } from "react";
import { createGames } from "../../api/games";
import { useStore } from "../../store/store";

const APCreatModal = ({ createModal, setCreateModal }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createGames,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["games"] });
      setCreateModal(false);
    },
  });

  const name = useStore((state) => state.name);
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
        title="Добавить новую Игру"
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
            title,
          });
        }}
        confirmLoading={isPending}
        className="w-250! "
      >
        <div className=" grid grid-cols-3 gap-7">
          <div>
            <p className=" font-bold">Название</p>
            <Input
              placeholder="Введите название игры..."
              variant="underlined"
            />
          </div>
          <div>
            <p className=" font-bold">Изоброжение</p>
            <Input placeholder="https://..." variant="underlined" />
          </div>
          <div>
            <p className=" font-bold">Цена</p>
            <Input placeholder="Введите цену..." variant="underlined" />
          </div>
          <div>
            <p className=" font-bold">Доп.Картинка</p>
            <Input placeholder="https://..." variant="underlined" />
          </div>
          <div>
            <p className=" font-bold">Трейлер</p>
            <Input placeholder="https://..." variant="underlined" />
          </div>
          <div>
            <p className=" font-bold">Изображение для главной страницы</p>
            <Input placeholder="https://..." variant="underlined" />
          </div>
          <div>
            <p className=" font-bold">Разработчик</p>
            <Input
              placeholder="Введите разрабочик игры..."
              variant="underlined"
            />
          </div>
          <div>
            <p className=" font-bold">Дата релиза</p>
            <DatePicker className="w-full!" />
          </div>
          <div>
            <p className=" font-bold">Жанр</p>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[
                { value: "Action", label: "Action" },
                { value: "Adventure", label: "Adventure" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
                
              ]}
              className="w-full!"
            />
          </div>
          <div>
            <p className=" font-bold">Название</p>
            <Input
              placeholder="Введите название игры..."
              variant="underlined"
            />
          </div>
          <div>
            <p className=" font-bold">Название</p>
            <Input
              placeholder="Введите название игры..."
              variant="underlined"
            />
          </div>
          <div>
            <p className=" font-bold">Название</p>
            <Input
              placeholder="Введите название игры..."
              variant="underlined"
            />
          </div>
          <div className=" col-start-2">
            <p className=" font-bold">Название</p>
            <Input
              placeholder="Введите название игры..."
              variant="underlined"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default APCreatModal;
