export class BankAccount {
  #balance = 0;
  #isOpen = false;
  #lock = false; // Simula un bloqueo para concurrencia

  async #acquireLock() {
    while (this.#lock) {
      // Espera a que el bloqueo se libere
      await new Promise(resolve => setTimeout(resolve, 1));
    }
    this.#lock = true;
  }

  #releaseLock() {
    this.#lock = false;
  }

  async deposit(amount) {
    await this.#acquireLock();
    try {
      if (!this.#isOpen) throw new ValueError('Account is closed');
      if (amount <= 0) throw new ValueError('Deposit amount must be positive');
      this.#balance += amount;
    } finally {
      this.#releaseLock();
    }
  }

  async withdraw(amount) {
    await this.#acquireLock();
    try {
      if (!this.#isOpen) throw new ValueError('Account is closed');
      if (amount <= 0) throw new ValueError('Withdrawal amount must be positive');
      if (amount > this.#balance) throw new ValueError('Insufficient balance');
      this.#balance -= amount;
    } finally {
      this.#releaseLock();
    }
  }

  get balance() {
    if (!this.#isOpen) throw new ValueError('Account is closed');
    return this.#balance;
  }

  open() {
    if (this.#isOpen) throw new ValueError('Account is already open');
    this.#balance = 0;
    this.#isOpen = true;
  }

  close() {
    if (!this.#isOpen) throw new ValueError('Account is already closed');
    this.#isOpen = false;
  }
}

export class ValueError extends Error {
  constructor(message = 'Bank account error') {
    super(message);
  }
}