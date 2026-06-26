import { useEffect, useState } from "react";
import { Modal, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useStore } from "../../store/store";
import { updateGames } from "../../api/games";

const APEditModal = ({ editModal, setEditModal }) => {

  const setEditGame = useStore((state) => state.setEditGame);

  const queryClient = useQueryClient();

  const editGame = useStore((state) => state.editGame);

  const [game, setGame] = useState(editGame);


  const { mutate, isPending } = useMutation({
    mutationFn: updateGames,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["games"],
      });

      setEditModal(false);
    },
  });

  useEffect(() => {
    if (editGame) {
      setGame(editGame);
    }
  }, [editGame]);
  return (
    <>
      <Modal
        title="Добавить новую Игру"
        closable={{ "aria-label": "Custom Close Button" }}
        open={editModal}
        onCancel={() => setEditModal(false)}
        onOk={() => {
          mutate({
            id: game.id,
            data: game,
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
              value={game.name}
              onChange={(e) => {
                setGame({
                  ...game,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Изоброжение</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={game.img}
              onChange={(e) => {
                setGame({
                  ...game,
                  img: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Цена</p>
            <Input
              placeholder="Введите цену..."
              variant="underlined"
              value={game.price}
              onChange={(e) => {
                setGame({
                  ...game,
                  price: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Доп.Картинка</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={game.logo}
              onChange={(e) => {
                setGame({
                  ...game,
                  logo: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Трейлер</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={game.trailer}
              onChange={(e) => {
                setGame({
                  ...game,
                  trailer: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Изображение для главной страницы</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={game.imgbg}
              onChange={(e) => {
                setGame({
                  ...game,
                  imgbg: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Разработчик</p>
            <Input
              placeholder="Введите разрабочик игры..."
              variant="underlined"
              value={game.developer}
              onChange={(e) => {
                setGame({
                  ...game,
                  developer: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Дата релиза</p>
            <DatePicker
              value={game.release ? dayjs(game.release, "YYYY-MM-DD") : null}
              onChange={(date, dateString) => {
                setGame({
                  ...game,
                  release: dateString,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Жанр</p>
            <Select
              value={game.tags}
              options={[
                { value: "Action", label: "Action" },
                { value: "Adventure", label: "Adventure" },
                { value: "FPS", label: "FPS" },
                { value: "Fighting", label: "Fighting" },
                { value: "RPG", label: "RPG" },
                { value: "Single", label: "Single" },
              ]}
              onChange={(value) => {
                setGame({
                  ...game,
                  tags: value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Память</p>
            <Input
              placeholder="Память игры..."
              variant="underlined"
              value={game.storage}
              onChange={(e) => {
                setGame({
                  ...game,
                  storage: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Язык игры</p>
            <Input
              placeholder="Язык игры..."
              variant="underlined"
              value={game.language}
              onChange={(e) => {
                setGame({
                  ...game,
                  language: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Платформы</p>
            <Input
              placeholder="Введите доступные платформы..."
              variant="underlined"
              value={game.platform}
              onChange={(e) => {
                setGame({
                  ...game,
                  platform: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-full">
            <p className=" font-bold">Описание</p>
            <Input
              placeholder="Введите описание игры..."
              variant="underlined"
              className="w-238!"
              value={game.title}
              onChange={(e) => {
                setGame({
                  ...game,
                  title: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default APEditModal;
