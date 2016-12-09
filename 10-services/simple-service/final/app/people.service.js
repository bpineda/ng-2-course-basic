var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getAll = function () {
        return [
            { name: 'Vincent Vega', height: 177, weight: 70 },
            { name: 'Mia Wallace', height: 200, weight: 100 },
            { name: 'Marcellus Wallace', height: 185, weight: 85 },
        ];
    };
    return PeopleService;
})();
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map