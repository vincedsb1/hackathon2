const pool = require('../databases/mysql.db');

class User {
    constructor(id, firstname, lastname, profile_picture, email, password, is_admin) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._profile_picture = profile_picture;
        this._email = email;
        this._password = password;
        this._is_admin = is_admin;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstname;
    }

    set firstName(firstName) {
        if (!firstName) throw new Error('Invalid first name value.');

        this._firstname = firstName;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(lastname) {
        if (!lastname) throw new Error('Invalid last name value.');

        this._lastname = lastname;
    }

    get profile_picture() {
        return this._profile_picture;
    }

    set profile_picture(profile_picture) {
        if (!profile_picture) throw new Error('Invalid profile picture value.');

        this._profile_picture = profile_picture;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        if (!email) throw new Error('Invalid email value.');

        email = email.trim();
        if (email === '') throw new Error('Invalid email value.');

        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        if (!password) throw new Error('Invalid password value.');
        password = password.trim();
        if (password.length < 8) throw new Error('Invalid password value.');
        this._password = password;
    }

    get is_admin() {
        return this._is_admin;
    }

    set is_admin(is_admin) {
        if (is_admin) {
            this._is_admin = 0;
        } else {
            this._is_admin = 1;
        }
    }

    async save() {
        const sql = `INSERT INTO user (firstname, lastname, profile_picture, email, password, is_admin) VALUES ("${this._firstname}", "${this._lastname}", "${this._profile_picture}", "${this._email}", "${this._password}", "${this._is_admin}")`;
        await pool.execute(sql);
    }

    static async find() {
        const sql = 'SELECT * FROM user';
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async findByIdAndUpdate(id, options) {
        const sql = `UPDATE user SET firstname = "${options.lastname}", lastname = "${options.lastname}", profile_picture = "${options.profile_picture}", email = "${options.email}", password = "${options.password}", is_admin = "${options.is_admin}" WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async findById(id) {
        const sql = `SELECT * FROM user WHERE id = "${id}"`;
        const [rows, fields] = await pool.execute(sql);

        return rows[0];
    }

    static async findByEmail(email) {
        const sql = `SELECT * FROM user WHERE email = "${email}"`;
        const [rows, fields] = await pool.execute(sql);

        console.log(rows + ' ' + fields);

        if (rows === undefined) {
            return 'No user found';
        }

        return rows[0];
    }

    static async findByIdAndDelete(id) {
        const sql = `DELETE FROM user WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = User;
