import numpy as np
import os

import mediapipe
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense



NUMBER_OF_SEQ = 100
SEQ_FRAMES = 25
HOLISTICS = mediapipe.solutions.holistic.Holistic(
    min_tracking_confidence=0.7,
    min_detection_confidence=0.8
)

MPDRAW = mediapipe.solutions.drawing_utils

##Model 
model = Sequential()
model.add(LSTM(64,return_sequences=True,activation="relu",input_shape=(25,258)))
model.add(LSTM(128,return_sequences=True,activation="relu"))
model.add(LSTM(64,return_sequences=False,activation="relu"))
model.add(Dense(64,activation="relu"))
model.add(Dense(128,activation="relu"))
model.add(Dense(64,activation="relu"))
model.add(Dense(32,activation="relu"))
model.add(Dense(ACTIONS.shape[0],activation="softmax"))

model.compile(optimizer="Adam",loss="categorical_crossentropy",metrics=["categorical_accuracy"])
