import { useStore } from "../../store/store";


const APEditModal = () => {

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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Изоброжение</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Цена</p>
            <Input
              placeholder="Введите цену..."
              variant="underlined"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Доп.Картинка</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={logo}
              onChange={(e) => {
                setLogo(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Трейлер</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={trailer}
              onChange={(e) => {
                setTrailer(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Изображение для главной страницы</p>
            <Input
              placeholder="https://..."
              variant="underlined"
              value={imgbg}
              onChange={(e) => {
                setImgbg(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Разработчик</p>
            <Input
              placeholder="Введите разрабочик игры..."
              variant="underlined"
              value={developer}
              onChange={(e) => {
                setDeveloper(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Дата релиза</p>
            <DatePicker
              className="w-full!"
              value={release ? dayjs(release, "YYYY-MM-DD") : null}
              onChange={(date, dateString) => {
                setRelease(dateString);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Жанр</p>
            <Select
              defaultValue={tags}
              style={{ width: 120 }}
              options={[
                { value: "Action", label: "Action" },
                { value: "Adventure", label: "Adventure" },
                { value: "FPS", label: "FPS" },
                { value: "Fighting", label: "Fighting" },
                { value: "RPG", label: "RPG" },
                { value: "Single", label: "Single" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
              className="w-full!"
              onChange={(value) => {
                setTags(value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Память</p>
            <Input
              placeholder="Память игры..."
              variant="underlined"
              value={storage}
              onChange={(e) => {
                setStorage(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Язык игры</p>
            <Input
              placeholder="Язык игры..."
              variant="underlined"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            />
          </div>
          <div>
            <p className=" font-bold">Платформы</p>
            <Input
              placeholder="Введите доступные платформы..."
              variant="underlined"
              value={platform}
              onChange={(e) => {
                setPlatform(e.target.value);
              }}
            />
          </div>
          <div className="w-full">
            <p className=" font-bold">Описание</p>
            <Input
              placeholder="Введите описание игры..."
              variant="underlined"
              className="w-238!"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default APEditModal