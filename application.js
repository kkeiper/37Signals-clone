function swapContainer(target) {
            var i = 4; //total number of Container
            while (i--) {
                i == target ? $('#title-container' + i).removeClass('hidden') : $('#title-container' + i).addClass('hidden');
            }
        }









