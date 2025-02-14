import css from "./TodayWaterItem.module.css";
import { ReactComponent as EditTool } from "../../images/icons/pencil-square.svg";
import { ReactComponent as Trash } from "../../images/icons/trash.svg";
import { ReactComponent as Glass } from "../../images/icons/glass.svg";
import { FC, useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Modal from "../../components/Modal/Modal";
import AddWaterModal from "../../components/AddWaterModal/AddWaterModal";
import { useTranslation } from "react-i18next";

interface IProps {
  id: string | undefined;
  amount: number;
  time: string;
}

const TodayWaterItem: FC<IProps> = ({ id, amount, time }) => {
  const { t } = useTranslation();

  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  const openModalDelete = () => {
    setIsModalDelete(true);
    document.body.classList.add("body-scroll-lock");
  };
  const closeModalDelete = () => {
    setIsModalDelete(false);
    document.body.classList.remove("body-scroll-lock");
  };
  const openModalEdit = () => {
    setIsModalEdit(true);
    document.body.classList.add("body-scroll-lock");
  };
  const closeModalEdit = () => {
    setIsModalEdit(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return (
    <li className={css["entry-item"]}>
      <div className={css["entry-info"]}>
        <Glass className={css.glass} />
        <p className={css.amount}>
          {amount} {t("todayWaterItem.ml")}
        </p>
        <p className={css.time}>{time}</p>
      </div>
      <div className={css.icons}>
        <button className={css.edit} onClick={openModalEdit}>
          <EditTool className={css.edit} />
        </button>
        <button className={css.delete} onClick={openModalDelete}>
          {" "}
          <Trash className={css.delete} />
        </button>
      </div>

      {isModalEdit && (
        <Modal
          title={t("todayWaterItem.titleAddWaterModal")}
          onClose={closeModalEdit}
        >
          <AddWaterModal
            isEditWater={true}
            id={id}
            previousAmount={amount.toString()}
            previousTime={time}
            onClose={closeModalEdit}
          />
        </Modal>
      )}
      {isModalDelete && (
        <Modal
          title={t("todayWaterItem.titleConfirmDeleteModal")}
          onClose={closeModalDelete}
          confirm
        >
          <ConfirmDeleteModal id={id} onClose={closeModalDelete} />
        </Modal>
      )}
    </li>
  );
};
export default TodayWaterItem;
