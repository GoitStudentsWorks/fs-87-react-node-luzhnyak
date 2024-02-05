import { useState, useEffect, useMemo } from "react";
import css from "./WaterRatioPanel.module.css";

import { useSelector } from "react-redux";
import { selectWatersToday } from "../../redux/waterConsumption/selectors";
import AddWaterModal from "../../components/AddWaterModal/AddWaterModal";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";

const WaterRatioPanel = () => {
  const { t } = useTranslation();

 const waterToday = useSelector(selectWatersToday) || 0;
  const progressValue = useMemo(() => {
    if (waterToday) {
      const value = Number(parseInt(waterToday?.progress));
      return value > 100 ? 100 : value;
    }
    return 0;
  }, [waterToday]);
  const [isOpen, setAddWaterModalOpen] = useState(false);
  const [previousValue, setValue] = useState(progressValue || 0);

  const openModal = () => {
    setAddWaterModalOpen(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setAddWaterModalOpen(false);
    document.body.classList.remove("body-scroll-lock");
  };

  useEffect(() => {
    const rangeThumb = document.getElementById("range-thumb");
    const rangeInput = document.getElementById("range-input");
    const rangeValue = document.getElementById("range-number");
    const fifty = document.getElementById("range-thumb");
    const hundred = document.getElementById("range-input");

    const thumbPosition = progressValue / 100;

    const changeThumbPosition = () => {
      if (rangeThumb && rangeInput && rangeValue) {
        const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
        const thumbPositionX = thumbPosition * space;
        rangeThumb.style.left = `${thumbPositionX}px`;
        rangeValue.style.left = `${thumbPositionX - 3}px`;
      }
    };

    changeThumbPosition();

    const updateProgressBarColor = () => {
      if (rangeThumb && rangeInput) {
        const space = rangeInput.offsetWidth - 7;
        const thumbPositionX = thumbPosition * space;
        rangeInput.style.background = `linear-gradient(to right, var(--secondary-color-blue-3) 0%, var(--secondary-color-blue-3) ${thumbPositionX}px, var(--secondary-color-blue-2) ${thumbPositionX}px, var(--secondary-color-blue-2) 100%)`;
      }
    };

    updateProgressBarColor();

  }, [waterToday, progressValue]);

  useEffect(() => {
    const quickCount = () => {
      const plusDifference = progressValue - previousValue;
      const minusDifference = previousValue - progressValue;

      if (plusDifference > 13 || minusDifference > 13) {
        setValue(progressValue);
      } else if (plusDifference <= 13 || minusDifference <= 13) {
        if (progressValue > previousValue) {
          for (let i = previousValue; i <= progressValue; i++) {
            setTimeout(() => {
              setValue(i);
            }, (i - previousValue) * 100);
          }
        } else if (progressValue < previousValue) {
          for (let i = previousValue; i >= progressValue; i--) {
            setTimeout(() => {
              setValue(i);
            }, (previousValue - i) * 100);
          }
        }
      }
    };

    quickCount();
  }, [previousValue, progressValue]);


  return (
    <div>
      <h2 className={css.today}>{t("waterRatioPanel.today")}</h2>
      <div className={css.mainContainer}>
        <div className={css.panel}>
          <div className={css.range}>
            <div className={css.rangeContent}>
              <div className={css.rangeSlider}>
                <div className={css.rangeSliderLine} id="range-line"></div>
              </div>

           
              <div className={css.rangeValue} id="range-number">
                <span className={css.rangeValueNumber}>{previousValue}%</span>
              </div>

              <input
                type="range"
                className={css.rangeInput}
                id="range-input"
                min="0"
                max="100"
                value={progressValue <= 100 ? progressValue : 100}
                step="1"
                readOnly
              />
              <div className={css.rangeThumb} id="range-thumb"></div>
            </div>
          </div>

          <div className={css.decorativeLines}>
            <div  className={css.line}></div>
            {/* <div className={css.line}></div> */}
            <div className={css.line}></div>
          </div>

          <div className={css.percentages}>
            <span className={css.number1} id='fifty'>0%</span>
            {/* <span className={css.number2} id='fifty'>50%</span> */}
            <span className={css.number3} id='oneHundred'>100%</span>
          </div>
        </div>
        <button type="button" className={css.addButton} onClick={openModal}>
          <img
            className={css.plusCircle}
            src={require("../../images/icons/progressbar-plus.svg").default}
            alt="plus-circle.svg"
            width="24"
            height="24"
          />
          <span className={css.addButtonText}>
            {t("waterRatioPanel.title")}
          </span>
        </button>
      </div>
      {isOpen && (
        <Modal title={t("waterRatioPanel.title")} onClose={closeModal}>
          <AddWaterModal isAddWater={true} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default WaterRatioPanel;
