module.exports = class Command {

    constructor(client, name, options = {}) {
        /**
         * Discord Akago Framework Client
         * @type {Object}
         */
        this.client = client;
        /**
         * The name of the command
         * @type {String}
         */
        this.name = options.name || name;
        /**
         * Breif description of the command
         * @type {String}
         */
        this.description = options.description || null;
        /**
         * Collection of aliases for the command
         * @type {Array}
         */
        this.aliases = options.aliases || [];
        /**
         * Collection of permissions the member requires
         * @type {Array}
         */
        this.memberPermissions = options.memberPermissions || [];
        /**
         * Collection of permissions the client requires
         * @type {Array}
         */
        this.clientPermissions = options.clientPermissions || [];
    }

}; 