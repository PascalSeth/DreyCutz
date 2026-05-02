'use client';

import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Calendar as CalendarIcon, Clock, User, Mail, Phone, ExternalLink } from 'lucide-react';

type Step = 'date' | 'time' | 'info' | 'success';

interface BookingData {
  serviceName: string;
  date: Date | null;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
];

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('date');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceName: '',
    date: new Date(),
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  
  // Reset scroll position when step changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [step]);

  useEffect(() => {
    const handleOpenModal = (event: any) => {
      const { serviceName } = event.detail;
      setBookingData(prev => ({ ...prev, serviceName: serviceName || 'General Consultation' }));
      setIsOpen(true);
      setStep('date');
    };

    window.addEventListener('openBookingModal', handleOpenModal);
    return () => window.removeEventListener('openBookingModal', handleOpenModal);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Reset after transition
    setTimeout(() => {
      setStep('date');
      setBookingData({
        serviceName: '',
        date: new Date(),
        time: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
    }, 500);
  };

  const handleDateChange = (value: any) => {
    setBookingData({ ...bookingData, date: value });
    setStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setBookingData({ ...bookingData, time });
    setStep('info');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const downloadICS = () => {
    const { serviceName, date, time } = bookingData;
    if (!date) return;

    // Parse time
    const [hourStr, minuteStr] = time.split(':');
    const [minutes, period] = minuteStr.split(' ');
    let hour = parseInt(hourStr);
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;

    const startDate = new Date(date);
    startDate.setHours(hour, parseInt(minutes));

    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // 1 hour duration

    const formatDateICS = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${formatDateICS(startDate)}`,
      `DTEND:${formatDateICS(endDate)}`,
      `SUMMARY:DreyCutz Appointment - ${serviceName}`,
      'DESCRIPTION:Booking at DreyCutz Studio. Please send CA$15 deposit to dreyvibez1@gmail.com.',
      'LOCATION:DreyCutz Studio',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'dreycutz-booking.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto overflow-x-hidden py-8 md:py-12">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 animate-in fade-in"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transition-all duration-500 animate-in zoom-in-95 slide-in-from-bottom-10 max-h-full">

        {/* Header */}
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-[#1A1A1A]">
              {step === 'success' ? 'Booking Confirmed!' : 'Book Appointment'}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${step === 'success' ? 'bg-green-500' : 'bg-[#1D6FE8] animate-pulse'}`} />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1D6FE8]">
                {step !== 'success' ? bookingData.serviceName : 'Everything is ready'}
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 text-gray-500 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest pl-1 hidden sm:block">Close</span>
            <X size={18} />
          </button>
        </div>

        {/* Content Area */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto hide-scrollbar px-6 md:px-8 py-4 md:py-6">

          {/* Step 1: Calendar */}
          {step === 'date' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-4 flex items-center gap-2 text-gray-400">
                <CalendarIcon size={14} className="text-[#1D6FE8]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Select a Date</span>
              </div>
              <Calendar
                onChange={handleDateChange}
                value={bookingData.date}
                minDate={new Date()}
                className="dc-calendar"
              />
            </div>
          )}

          {/* Step 2: Time Slots */}
          {step === 'time' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <button
                onClick={() => setStep('date')}
                className="mb-4 flex items-center gap-2 text-gray-400 hover:text-[#1A1A1A] transition-colors"
              >
                <ChevronLeft size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Back to Calendar</span>
              </button>

              <div className="mb-6">
                <p className="text-sm font-bold text-[#1A1A1A]">{formatDate(bookingData.date)}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Select your preferred time</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="py-3 px-2 rounded-xl border border-gray-200 text-[11px] font-bold text-[#1A1A1A] hover:border-[#1D6FE8] hover:text-[#1D6FE8] transition-all duration-200 active:scale-95"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Information Form */}
          {step === 'info' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <button
                onClick={() => setStep('time')}
                className="mb-4 flex items-center gap-2 text-gray-400 hover:text-[#1A1A1A] transition-colors"
              >
                <ChevronLeft size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Back to Time</span>
              </button>

              <div className="mb-6">
                <p className="text-sm font-bold text-[#1A1A1A]">{formatDate(bookingData.date)} • {bookingData.time}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Complete your details</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">First Name</label>
                    <input
                      required
                      name="firstName"
                      value={bookingData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#1D6FE8] outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Last Name</label>
                    <input
                      required
                      name="lastName"
                      value={bookingData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#1D6FE8] outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#1D6FE8] outline-none transition-all"
                    placeholder="jean.dupont@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#1D6FE8] outline-none transition-all"
                    placeholder="+1 (514) 000-0000"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#1D6FE8] text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-[#1A1A1A] hover:shadow-gray-200 transition-all duration-300 active:scale-[0.98]"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          )}

          {/* Step 4: Success Message */}
          {step === 'success' && (
            <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-4">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm font-medium text-gray-600 leading-relaxed">
                  Your appointment is reserved. Please send your <span className="font-bold text-[#1A1A1A]">CA$15 deposit</span> via Interac E-Transfer to <span className="text-[#1D6FE8] font-bold">dreyvibez1@gmail.com</span> to secure it — without the deposit, your booking may be cancelled.
                </p>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 inline-block w-full">
                  <p className="text-lg font-black uppercase tracking-tighter text-[#1A1A1A] mb-1">
                    {bookingData.serviceName}
                  </p>
                  <p className="text-sm font-bold text-[#1D6FE8]">
                    {formatDate(bookingData.date)} • {bookingData.time}
                  </p>
                </div>

                <p className="text-[11px] text-gray-400 font-medium italic">
                  A CA$15 deposit is required via Interac E-Transfer to dreyvibez1@gmail.com to confirm your appointment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={downloadICS}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl border border-gray-200 text-xs font-bold text-[#1A1A1A] hover:bg-gray-50 transition-all"
                >
                  <CalendarIcon size={14} />
                  Add to Calendar
                </button>
                <button
                  onClick={closeModal}
                  className="py-4 rounded-xl bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#1D6FE8] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer / Progress Bar (Not for success) */}
        {step !== 'success' && (
          <div className="px-6 md:px-8 py-4 md:py-6 bg-gray-50/50 border-t border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Progress</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#1D6FE8]">
                {step === 'date' ? 'Step 1 of 3' : step === 'time' ? 'Step 2 of 3' : 'Final Step'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-1.5 rounded-full transition-all duration-500 ${step === 'date' ? 'w-full bg-[#1D6FE8]' : 'w-full bg-[#1D6FE8]'}`} />
              <div className={`h-1.5 rounded-full transition-all duration-500 ${step === 'date' ? 'w-full bg-gray-200' : 'w-full bg-[#1D6FE8]'}`} />
              <div className={`h-1.5 rounded-full transition-all duration-500 ${step === 'info' ? 'w-full bg-[#1D6FE8]' : 'w-full bg-gray-200'}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
