import { Dialog} from '@headlessui/react'
import React from 'react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo/logo1 1.png';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='sticky top-0'>
            <header className="bg-slate-50">
                <nav className="mx-auto flex container items-center justify-between py-5 px-8 lg:px-0" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/">
                            <img className="w-auto h-12" src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 text-base inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
                        </button>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/coffee"
                            className={({ isActive, isPending }) =>
                                isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                            }
                        >
                            Add Coffee
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                            }
                        >
                            Blog
                        </NavLink>


                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                            }
                        >
                            Login
                        </NavLink>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <img className="w-auto h-12" src={Logo} alt="" />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="flex flex-col gap-y-4 py-6">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/coffee"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                                        }
                                    >
                                        Add Coffee
                                    </NavLink>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </div>
                                <div className="py-6 flex flex-col">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "padding" : isActive ? "btn btn-neutral" : "btn btn-outline"
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
};

export default Header;