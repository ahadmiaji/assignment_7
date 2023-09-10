exports.create = async (req, res) => {

    res.status(201).json({ status: 'success', data: 'Created a Product' });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Read a Product' });
};

exports.delete = async (req, res) => {

    res.status(204).json({ status: 'success', data: null });
};

exports.update = async (req, res) => {

    res.status(200).json({ status: 'success', data: 'Updated a Product' });
};