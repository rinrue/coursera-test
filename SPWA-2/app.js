(function () {
    'use strict';
    angular.module('ShoppingListCheckoff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .controller('AddToList', AddToList)
    .service('ShoppingListCheckoffService', ShoppingListCheckoffService);

    ToBuyController.$inject = ['ShoppingListCheckoffService'];
    function ToBuyController(ShoppingListCheckoffService) {
        var buyList = this;
        buyList.items = ShoppingListCheckoffService.getBuyItems();
        buyList.errorMessage = function () {
            if (buyList.items.length > 0){
                return false;
            }
            else {
                return true;
            }
        }
        buyList.moveItem = function (itemIndex) {
            ShoppingListCheckoffService.moveItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
    function AlreadyBoughtController(ShoppingListCheckoffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckoffService.getBoughtItems();
        boughtList.errorMessage = function () {
            if (boughtList.items.length > 0){
                return false;
            }
            else {
                return true;
            }
        }
    }

    AddToList.$inject = ['ShoppingListCheckoffService'];
    function AddToList(ShoppingListCheckoffService) {
        var insert = this;
    }

    function ShoppingListCheckoffService() {
        var service = this;
        var buyItems = [
            {
                name: "tubs of cool whip",
                quantity: 1
            }, {
                name: "boxes of cookies",
                quantity: 3
            }, {
                name: "boxes of jello",
                quantity: 2
            }, {
                name: "bottles of cream",
                quantity: 2
            }, {
                name: "bananas", 
                quantity: 5
            }

        ];
        var boughtItems = [];

        service.moveItem = function (itemIndex) {
            var item = buyItems[itemIndex];
            boughtItems.push(item);
            buyItems.splice(itemIndex, 1);
        }

        service.getBuyItems = function () {
            return buyItems;
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }
    }
})();