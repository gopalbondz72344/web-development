import cv2 as cv
def trackbar(x):
    text = f'Trackbar: {x}'
    cv.displayOverlay('window', text, 1000)
    cv.imshow('window', img)
img = cv.imread('dog-img.jpg', cv.IMREAD_COLOR)
cv.imshow('window', img)
cv.createTrackbar('x', 'window', 100, 255, trackbar)
cv.waitKey(0)
cv.destroyAllWindows()
